import React, { Component } from "react";
import Table from "./Table";

class Filter extends Component {
  state = {
    searchText: "",
    pagestoShow: 5,
    isLasIndex: false,
    isFirstIndex: true,
    allData: [],
    filteredResult: [],
    current: 1,
  };
  componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ allData: data }));
  }

  handlePageChange = (pageNumber) => {
    this.setState({
      current: pageNumber,
    });
  };

  textChangleHandler = (e) => {
    const { allData } = this.state;
    const { value } = e.target;
    this.setState({
      searchText: value,
    });
    if (value.length > 2) {
      this.filterResult(value);
    } else if (value.length === 0) {
      this.setState({
        filteredResult: allData,
        current: 1,
      });
    }
  };

  filterResult = (value) => {
    const { allData } = this.state;

    const textToFind = value.toLowerCase();
    const listToBeSorted = [...allData];
    let sortedRsult = [];
    if (listToBeSorted && listToBeSorted.length > 0) {
      sortedRsult = listToBeSorted.filter(
        (item) =>
          item.name.toLowerCase().includes(textToFind) ||
          item.region.toLowerCase().includes(textToFind) ||
          item.capital.toLowerCase().includes(textToFind)
      );
    }
    this.setState({
      filteredResult: sortedRsult,
      current: 1,
    });
  };

  render() {
    const { allData, filteredResult, current, searchText } = this.state;
    let dataToShow = filteredResult;
    if (allData && allData.length > 0) {
      dataToShow = searchText.length > 2 ? filteredResult : allData;
    }

    return (
      <div className="filterPage">
        <div className="searchWrapper">
          <h3>Table Mockup</h3>{" "}
          <input
            className="textB"
            autoFocus
            type="text"
            onChange={(e) => this.textChangleHandler(e)}
            placeholder="Enter 3 charecter to search"
          />
        </div>
        {allData.length && (
          <Table
            data={dataToShow}
            total={dataToShow.length}
            maxVisiblePages={15}
            current={current}
            handlePageChange={this.handlePageChange}
          />
        )}
      </div>
    );
  }
}

export default Filter;
