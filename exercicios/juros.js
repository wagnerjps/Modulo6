const jurosSimples = (c, i, t) => (c * i * t)

const montJurosSimples = ({ jurosSimples }) => (c, i, t) => c + jurosSimples(c, i, t)


const montJurosComposto = (c, i, t) => c * Math.pow((1 + i), t)

const jurosComposto = ({ montJurosComposto }) => (c, i, t) =>  montJurosComposto(c, i, t) - c

module.exports = {
    jurosSimples,
    montJurosSimples: montJurosSimples({ jurosSimples }),
    montJurosComposto,
    jurosComposto: jurosComposto({ montJurosComposto }),
    pure: { 
        montJurosSimples,
        jurosComposto
    }
}