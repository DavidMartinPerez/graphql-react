const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType,
        GraphQLString,
        GraphQLInt
    } = graphql;

const users = [
    {id: '23', firstName: 'Batman', age: 80},
    {id: '27', firstName: 'Superman', age: 80},
    {id: '21', firstName: 'Spiderman', age: 57},
    {id: '02', firstName: 'Joker', age: null}
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        },
    }
})