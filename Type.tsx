export type courseItem = {
    itemName: string;
    description: string;
    category: string | null;
    price: number;
    intensity: string;
    image: string | null;
    ingredients: string[];
};

export type RootStackParamList = {
    FirstAidScreen: undefined;
    HomeScreen: undefined;
    ManageScreen: { 
        cafeItem: courseItem[];
        setItems: React.Dispatch<React.SetStateAction<courseItem[]>>;
   };
};
