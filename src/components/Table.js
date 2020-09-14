import React, { Component } from "react";
import Pagination from "./Pagination";
import "../App.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 1 };
  }
  handlePageChange = (pageNumber) => {
    this.setState({
      current: pageNumber,
    });
  };

  getCurrentVisibleData = (current) => {
    const { maxVisiblePages, data } = this.props;
    const tobeSpliced = (current - 1) * maxVisiblePages;
    return data.length > maxVisiblePages
      ? data.slice(tobeSpliced, current * maxVisiblePages)
      : data;
  };
  render() {
    const { total, maxVisiblePages, data } = this.props;
    const { current } = this.state;
    const currentVisibleData = this.getCurrentVisibleData(current);

    console.log(data, "all", currentVisibleData);
    let toShow = <p>No Result Foound!</p>;
    if (currentVisibleData.length > 0) {
      toShow = (
        <>
          <table className="tableWrapper">
            <thead>
              <tr>
                <th>Country</th>
                <th>Capital</th>
                <th>Region</th>
                <th>Population</th>
                <th>Area </th>
              </tr>
            </thead>
            <tbody>
              {currentVisibleData.map((item, i) => {
                return (
                  <tr key={item.name + i}>
                    <td>{item.name}</td>
                    <td>{item.capital}</td>
                    <td>{item.region}</td>
                    <td>{item.population}</td>
                    <td>{item.area}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="paginationWrapper">
            <Pagination
              current={current}
              total={total}
              handlePageChange={this.handlePageChange}
              maxVisiblePages={maxVisiblePages}
            />
          </div>
        </>
      );
    }
    return <>{toShow}</>;
  }
}

export default Table;
