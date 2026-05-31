let file: File | null = null;

export const audioService = {
  setFile: (f: File) => {
    file = f;
  },

  getFile: () => file,
};