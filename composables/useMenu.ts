export const useMenu = () => {
  const menu = useState('isMenuOpen', () => false)
  const toggleMenu = useToggle(menu)
  return {
    menu,
    toggleMenu,
  }
}
