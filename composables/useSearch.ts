export const useSearch = () => {
  const search = useState('isSearchOpen', () => false)
  const toggleSearch = useToggle(search)
  return {
    search,
    toggleSearch,
  }
}
