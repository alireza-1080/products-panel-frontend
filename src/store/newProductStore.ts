import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NewProductStore = {
  name: string;
  price: string;
  image: string;
  isLoading: boolean;
  setName: (value: string) => void;
  setPrice: (value: string) => void;
  setImage: (value: string) => void;
  setIsLoading: (value: boolean) => void;
  resetStore: () => void;
};

const useNewProductStore = create(
  devtools<NewProductStore>((set) => ({
    name: "",
    price: "",
    image: "",
    isLoading: false,
    setName: (name) => set({ name }),
    setPrice: (price) => {
      if (price.trim() === "" || !isNaN(Number(price))) set({ price });
    },
    setImage: (image) => set({ image }),
    setIsLoading: (value) => set({ isLoading: value }),
    resetStore: () => set({ name: "", price: "", image: "", isLoading: false }),
  })),
);

export default useNewProductStore;
