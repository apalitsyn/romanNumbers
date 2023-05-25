exports.convertToRomans = (req, res) => {
    let ourRequestint = parseInt(req.query.ourNumber);
    let ourApiResponse = romanNumeralGenerator(ourRequestint);

    console.log(ourApiResponse);

    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.status(200).send(ourApiResponse);

    function romanNumeralGenerator(int) {
        let ourResponse = '';
        if(isNaN(req.query.ourNumber)) {
            ourResponse = 'Not a valid number';
            return ourResponse;
        }

        if(int > 3999) {
            ourResponse = 'Number cannot be bigger than 3999';
            return ourResponse;
        }

        if(int < 1) {
            ourResponse = 'Number has to be higher than 0';
            return ourResponse;
        }

        const map = {
            M:  1000,
            CM: 900,
            D:  500,
            CD: 400,
            C:  100,
            XC: 90,
            L:  50,
            XL: 40,
            X:  10,
            IX: 9,
            V:  5,
            IV: 4,
            I:  1,
          };
        
        for (key in map) {
            ourResponse += key.repeat(Math.floor(int / map[key]));
            int %= map[key];
        }
        
        return ourResponse;
    }
}
