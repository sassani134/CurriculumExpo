# Curriculum Vitae with expo

A Resume that fetch json data from a rails web site
## Installation

### It works only with this:
```bash
git clone https://github.com/sassani134/CurriculumExpo.git
expo start
```

### But if you want sommething more personal u can:
on a terminal
```bash
git clone https://github.com/sassani134/CurriculumRails.git
rails s
```

on a second terminal
```bash
git clone https://github.com/sassani134/CurriculumExpo.git
```
Change the useEffect fetch function in App.js to:
```javascript
    fetch('http://127.0.0.1:3000//home/index.json')
```
or
```javascript
    fetch('http://localhost:3000//home/index.json')
```
then
```bash
cd CurriculumExpo
expo start
```

you can also use my expo link:


## Usage
You can freely use it for your own resume or for educational purporse. Do not hesitate to change the styles

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)