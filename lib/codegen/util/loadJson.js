const fs = require('fs');

module.exports = {
    fetchJsonFromFile : (path, callback) => {
        fs.readFile(require.resolve(path), (err, data) => {
            if (err)
                callback(err)
            else
                callback(null, JSON.parse(data))
        })
    }
}