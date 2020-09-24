
export function HasValidMimetype(file, mimetype) {

    if (!file) {
        return false;
    }

    return file.type === mimetype;

}