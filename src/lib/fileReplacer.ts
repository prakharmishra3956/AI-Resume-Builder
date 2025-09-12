// src/lib/fileReplacer.ts

// A proper JSON replacer for handling File objects
export function fileReplacer(key: string, value: unknown) {
  if (value instanceof File) {
    return {
      name: value.name,
      type: value.type,
      size: value.size,
      lastModified: value.lastModified,
    };
  }
  return value;
}
