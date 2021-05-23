import readFileJson from "read-file-json"

readFileJson("./exists.json5").then(result => {

})

readFileJson("./doesNotExist.json5").then(result2 => {

})