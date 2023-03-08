import React from "react";
import "../index.css";

const ReadData = () => {
  return (
    <>
      <div class="report">
        <i class="fa fa-user"></i>
        <span class="infoContent">Name : Test2</span>
        <span class="infoContent">Roll No : 3</span>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Subject Name</th>
              <th>Score (?/100)</th>
            </tr>
          </thead>

          <tr class="firstTr">
            <td>1</td>
            <td>English</td>
            <td>15</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Math</td>
            <td>15</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Science</td>
            <td>15</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Social Studies</td>
            <td>15</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Language </td>
            <td>15</td>
          </tr>
        </table>
        <h4 class="infoContent">Status : Fail</h4>
      </div>
    </>
  );
};

export default ReadData;
