import { generateEndpoints } from '@rtk-query/codegen-openapi'
import { resolve } from 'path'

const api = await generateEndpoints({
    apiFile: './fixtures/emptyApi.ts',
    schemaFile: resolve(__dirname, 'fixtures/petstore.json'),
    filterEndpoints: ['getPetById', 'addPet'],
    hooks: true,
})