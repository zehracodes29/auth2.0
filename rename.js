const fs = require('fs');
try {
    fs.renameSync('src/pages', 'src/_pages');
    console.log('Renamed successfully');
} catch (e) {
    console.error('Error renaming:', e.message);
}
