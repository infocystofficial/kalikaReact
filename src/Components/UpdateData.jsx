import React from "react";

const UpdateData = () => {
  return (
    <>
      <div class="editTable">
        <h3>Editing Score Of Test2</h3>
        <table>
          <tr>
            <td class="contentData">
              <label>Name:</label>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td class="contentData">
              <label>Roll No:</label>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td class="contentData">
              <label>Maths:</label>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td class="contentData">
              <label>English:</label>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td class="contentData">
              <label>Science:</label>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td class="contentData">
              <label>Social Studies:</label>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td class="contentData">
              <label>Language:</label>
              <input type="text" />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default UpdateData;
