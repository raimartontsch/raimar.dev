import create from 'zustand';

const useStore = create(set => ({
	modalState: false,
	setModalState: () => set({ modaleState: true }),
	setNavBar: true,
	showNavBar: () => {
		set({ setNavBar: false });
	},
	hideNavBar: () => {
		set({ setNavBar: true });
	},
}));

export default useStore;
