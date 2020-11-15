/**
 * copy (by value) the data to keep an add them to a list under previous data
 * @param {String} sourceSheet : name of sheet where are the data to keep
 * @param {String} sourceRange : A1notation of range to keep (C3:G3) (may be several lines)
 * @param {String} targetSheet : name of sheet where to put the data to keep
 * @param {String} targetRange : A1 notation of the header. The data to keep will be written at the first empty line below
 */
function historization({sourceSheet, sourceRange, targetSheet, targetRange}){
    let source = getSheet(sourceSheet);
    let valueToKeep = source.getRange(sourceRange);
    let target = getSheet(targetSheet);
    let header = target.getRange(targetRange);
    let firstEmpty= getFirstEmptyRowBelow(header);
    // NOTE : not possible to use copyTo(SpreadsheetApp.CopyPasteType.PASTE_VALUES) because of bug in google
    firstEmpty.setValues(valueToKeep.getValues());
}