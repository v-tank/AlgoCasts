function determinant(m) {
  // return the determinant of the matrix passed in
  if (m.length <= 1) {
    return m[0][0];
  }
  else if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  else {
    var det = 0;
    for (let i = 0; i < m[0].length; i++) {
      var sign = (i % 2 === 0 ? 1 : -1);

      det += m[0][i] * sign * determinant(trimMatrices(m,i));
    }
    return det;
  }
};

function trimMatrices(M,index) {
  var smallArray = [];

  // copy the array first
  for (var i=0; i < M.length; i++) {
    smallArray.push(M[i].slice(0));
  }

  // delete the first row
  smallArray.splice(0,1);

  // delete the column at the index specified
  for (var i=0; i<smallArray.length; i++) {
    smallArray[i].splice(index,1);
  }

  return smallArray;
}
