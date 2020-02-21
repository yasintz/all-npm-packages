import routeScheme from '~/index';

export default (data: any) => {
  const schema = routeScheme.dataToSchema(data);
  const seperateObje = routeScheme.separateData(data);
  const reverseData = routeScheme.schemaToData(schema, seperateObje);

  return { schema, seperateObje, reverseData };
};
