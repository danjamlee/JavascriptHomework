
var tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach
    
    ((tableData) => {
      var cell = row.append("td");
        cell.text(tableData);
      }
    );
  });
}

function handleClick() {
  var date = d3.select("#timeinput").property("value");

  let filtered = tableData;
  if (date) {
    filtered = filtered.filter(row => row.datetime === date);
  }
  buildTable(filtered);
}

d3.selectAll("#finalfilter").on("click", handleClick);

buildTable(tableData);
