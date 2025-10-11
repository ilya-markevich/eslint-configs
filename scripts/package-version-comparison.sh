#!/usr/bin/env bash

set -e

version_pkg=$(grep '"version"' package.json | head -1 | sed -E 's/.*"version": *"([^"]+)".*/\1/')
version_lock=$(grep '"version"' package-lock.json | head -1 | sed -E 's/.*"version": *"([^"]+)".*/\1/')

echo "package.json version:      $version_pkg"
echo "package-lock.json version: $version_lock"

if [[ "$version_pkg" == "$version_lock" ]]; then
  echo "Versions match"
  exit 0
else
  echo "Versions do NOT match! Run npm install to update version in package-lock.json"
  exit 1
fi