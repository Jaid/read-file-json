import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
  * @type { import("../src") }
  */
const {default: readFileJson} = indexModule

it("should return string (async)", async () => {
  const file = path.join(__dirname, "..", "package.json")
  const result = await readFileJson(file)
  expect(result.name).toBe("read-file-json")
})

it("should return null for non-existing files (async)", async () => {
  const file = path.join(__dirname, "..", "package.freddy")
  const result = await readFileJson(file)
  expect(result).toBe(null)
})