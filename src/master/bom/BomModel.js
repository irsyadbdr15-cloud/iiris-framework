export function createBom(data) {

    return {

        bomNumber: data.bomNumber,

        partNumber: data.partNumber,

        revision: data.revision,

        status: data.status,

        materials: data.materials

    };

}