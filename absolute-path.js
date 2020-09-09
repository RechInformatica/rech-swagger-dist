
/**
 * Quando executando em um ambiente NodeJS, retorna o caminho absoluto para o diretório corrente.
 * Quando não executado em um ambiente NodeJS, retorna uma mensagem de erro.
 * @returns string
 */
const getAbsoluteFSPath = function () {
    // Detecta se está rodando em um ambiente NodeJS ou em um navegador
    if (typeof module !== "undefined" && module.exports) {
        return require("path").resolve(__dirname)
    }
    throw new Error('getAbsoluteFSPath pode ser executado apenas em um ambiente NodeJS');
}

module.exports = getAbsoluteFSPath
