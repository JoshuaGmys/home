import XLSX from 'xlsx';
// Note that the name "myDropzone" is the camelized
// id of the form.


const parse = (file) => {
    const excelData = XLSX.readFile(file);
    return Object.keys(excelData.Sheets).map((name) => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }));
     
};

Dropzone.options.myDropzone = {
// Configuration options go here
// camelized version of the `id`
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    clickable: true,

   
    // Note: using "function()" here to bind `this` to
    // the Dropzone instance.
    init: function() {
        this.on("addedfile", file => {
            console.log("A file has been added. " + file.name);
            parse(file).forEach((element) => {
                console.log(element.name);
                console.log(element.data);
            });
        });
    }
};