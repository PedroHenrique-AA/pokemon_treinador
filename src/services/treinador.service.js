import { treinadorRepository } from "../repositories/treinador.repository.js";

class TreinadorServices{
    async putTreinador(id,dados){
        const treinadorAtualizado = await treinadorRepository.putTreinador(id,dados);
        return treinadorAtualizado;
    };
    async knexTreinador(id_treinador,dados){
        const treinadorAtualizado = await treinadorRepository.knexTreinador(id_treinador,dados);
        return treinadorAtualizado;
    };
};

export const treinadorServices = new TreinadorServices();