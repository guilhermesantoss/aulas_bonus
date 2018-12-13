// console.log(process.argv);
//dar o comando no console node ex08_process --producao outro param

function temParam(param) {
    return process.argv.indexOf(param) !== -1;
}

if (temParam('--producao')) {
    console.log('Atenção total!');
} else {
    console.log('Tranquilo');
}
