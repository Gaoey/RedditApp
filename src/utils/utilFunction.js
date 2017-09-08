export const generateActionType = name => ['REQUEST', 'SUCCESS', 'FAILURE'].reduce(
  (value, next) => Object.assign(value, { [next]: `${name}_${next}` }),
  Object.create(null)
)

export const hasImageSrc = (src) => {
  return src !== "" && src !== 'image'
    && src !== 'default'
    && src !== 'self'
    && src !== 'nsfw'
}