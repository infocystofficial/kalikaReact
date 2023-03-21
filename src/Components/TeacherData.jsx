import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";

const BASE_URL = "https://infocbackend-production.up.railway.app/teacher";
const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlYWNoZXIxIiwicGFzc3dvcmQiOiJwYXNzdGVhY2hlcjEiLCJpYXQiOjE2NzkzOTIxNTksImV4cCI6MTY3OTY1MTM1OX0.IpQ68xWMGEfDc8W1fOyMMrnYyAHRx032Y4hBFBcbK-A";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Credentials": "true",
    Authorization: "Bearer " + JWT,
  },
};

const TeacherData = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get(BASE_URL, config);
      setMyData(response.data);
    } catch (e) {
      setIsError(e);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>Roll No.</th>
          <th>Name</th>
          <th>Maths</th>
          <th>English</th>
          <th>Science</th>
          <th>Social Studies</th>
          <th>Account</th>
          <th>Status</th>
          <th></th>
        </tr>
        {myData.map((data) => {
          const { RollNo, Name, Maths, English, Science, Social, Account } =
            data;
          return (
            <tr>
              <td>{RollNo}</td>
              <td>{Name}</td>
              <td>{Maths}</td>
              <td>{English}</td>
              <td>{Science}</td>
              <td>{Social}</td>
              <td>{Account}</td>
              <td>{"Fail"}</td>
              <td>
                <i class="fa fa-pencil"></i>
                <i class="fa fa-trash"></i>
              </td>
            </tr>
          );
        })}
      </table>

      {/* <div class="studentresult">
        <table>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Maths</th>
            <th>English</th>
            <th>Science</th>
            <th>Social Studies</th>
            <th>Account</th>
            <th>Status</th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            <td>Vivek</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>Pass</td>
            <td>
              <i class="fa fa-pencil"></i>
              <i class="fa fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vivek</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>Pass</td>
            <td>
              <i class="fa fa-pencil"></i>
              <i class="fa fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Vivek</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>Pass</td>
            <td>
              <i class="fa fa-pencil"></i>
              <i class="fa fa-trash"></i>
            </td>
          </tr>
        </table>
      </div> */}
    </>
  );
};

export default TeacherData;
