function buildSchema(data) {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
      type="application/ld+json"
    />
  );
}
export default buildSchema;
