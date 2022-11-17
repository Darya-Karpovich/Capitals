type Capital = {
  id: number;
  name: string;
  country: 'string';
  description: string;
  flaglocation: string | null;
  coordinates: string;
};

type OverpassCapital = {
  type: string;
  id: number;
  lat: number;
  lon: number;
  tags: {
    int_name: string;
    'name:en': string;
  };
};

type User = {
  email: string;
  id: number;
  password: string;
  sessiontoken: string;
  username: string;
};

export type { User, Capital, OverpassCapital };
