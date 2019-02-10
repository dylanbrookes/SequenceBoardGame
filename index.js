for (var column = 0; column < data.length; column++) {
    // get each column
    for (var row = 0; row < data.length; row++) {
        // get column's row value
        if (data[column][row]['value'] === null)
        console.log(data[column][row]);
    }
}