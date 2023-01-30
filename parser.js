import XLSX from "xlsx";

const parse = (file) => {
    const excelData = XLSX.readFile(file);
    return Object.keys(excelData.Sheets).map((name) => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name], {header: 1}),
    }));
}

parse("./test.xlsx").forEach((element) => {
    console.log(element.name);
    console.log(element.data);
});
