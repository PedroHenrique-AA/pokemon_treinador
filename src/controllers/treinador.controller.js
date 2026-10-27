import { treinadorServices } from "../services/treinador.service.js";

class TreinadorController{
    async putTreinador(req, res) {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorServices.putTreinador(treinadorId, req.body);
        res.status(200).json(treinador);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o treinador"});
    }
};

    async knexTreinador(req, res) {
    const treinadorId = req.params.id
    try {
        const treinador = await treinadorServices.knexTreinador(treinadorId, req.body);
        res.status(200).json(treinador);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o treinador"});
    }
};
};

export const treinadorController = new TreinadorController();