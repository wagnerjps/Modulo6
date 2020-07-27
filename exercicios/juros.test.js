const api = require('./juros')
const { jurosComposto } = require('./juros')
const dados = {
    C: 100,
    I: 0.035,
    T: 30
}

test('jurosSimples', () => {

    const jurosSimples = api.jurosSimples(dados.C, dados.I, dados.T)
    const jurosSimplesZero = api.jurosSimples(dados.C, 0, dados.T)

    const esperado = 105
    const esperadoZero = 0
    expect(jurosSimples.toFixed(2)).toEqual(esperado.toFixed(2))
    expect(jurosSimplesZero.toFixed(2)).toEqual(esperadoZero.toFixed(2))
})

test('montJurosSimples', () => {
    
    const esperado = 205
    const esperadoMock = [dados.C, dados.I, dados.T]
    //const especMock = esperado - dados.C

    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 105)
    
    const montJurosSimples = api.pure.montJurosSimples({ jurosSimples })
    const montante = montJurosSimples(dados.C, dados.I, dados.T)

    expect(jurosSimples.mock.calls[0]).toEqual(esperadoMock)
    expect(montante).toEqual(esperado)
})

test('montJurosComposto', () => {
    
    const montJurosComposto = api.montJurosComposto(dados.C, dados.I, dados.T)
    const esperado = 280.68
    
    expect(montJurosComposto.toFixed(2)).toEqual(esperado.toFixed(2))
})

test('jurosComposto', () => {
    
    const esperado = 105
    const esperadoMock = [dados.C, dados.I, dados.T]
    //const especMock = esperado + dados.C

    const montJurosComposto = jest.fn()
    montJurosComposto.mockImplementation(() => 205)
    const jurosComposto = api.pure.jurosComposto({ montJurosComposto })
    const juros = jurosComposto(dados.C, dados.I, dados.T)
    console.log('Juros ',juros)
    expect(montJurosComposto.mock.calls[0]).toEqual(esperadoMock)
    expect(juros).toEqual(esperado)

})