/** Type declaration for GeoJSON feature collection used by geography chart */
export const geoFeatures: {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    properties: { name: string };
    geometry: { type: "Polygon"; coordinates: number[][][] };
  }>;
};
