export type CourseItem = {
    itemName: string;
    description: string;
    category: string | null;
    price: number;
    image: string | null;
};

export type RootStackParamList = {
    FirstAidScreen: undefined;
    ManageScreen: { 
        courseItem: CourseItem[];
        setItems: React.Dispatch<React.SetStateAction<CourseItem[]>>;
   };
   LandscapingScreen: undefined;
   SewingScreen: undefined;
   LifeSkillsScreen: undefined;
   FeesCalculatorScreen: undefined;
};


