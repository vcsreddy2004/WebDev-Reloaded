let extension = ".jpg";

let contentType;
switch (extension)
{
    case ".css": 
        contentType = "text/css";
        break;
    case ".html":
        contentType = "text/html";
        break;
    case ".js":
        contentType = "application/javascript";
        break;
    case ".json":
        contentType = "application/json";
        break;
    case ".png":
        contentType = "image/png";
        break;
    case ".jpg":
    case ".jpeg":
        contentType = "image/jpeg";
        break;
    default:
        contentType = "application/octet-stream";
        break;
}
console.log(contentType);
let switchAlternative = { // alternative to switch statement.
    ".css":"text/css",
    ".html":"text/html",
    ".js":"application/javascript",
    ".json":"application/json",
    ".png":"image/png",
    ".jpg":"image/jpeg",
    ".jpeg":"image/jpeg",
}
console.log(switchAlternative[extension] || "application/octet-stream"); // (||) statement triggers the default value

let extensionMap = new Map();
extensionMap.set(".css","text/css");
extensionMap.set(".html","text/html");
extensionMap.set(".jpg","text/jpeg");
extensionMap.set(".jpeg","text/jpeg");
console.log(extensionMap.get(extension));