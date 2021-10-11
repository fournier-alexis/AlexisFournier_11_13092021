export function getSearchedId(search:string):string {
    //"?id=a4sdafs" => a4sdafs 
    return search.substring(search.indexOf('=') + 1);
}