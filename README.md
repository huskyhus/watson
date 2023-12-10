# Watson

An utility bot used by detective club.

---

## 機能追加

1. `src/command.ts`にコマンドの定義を書き込む。
2. `npm run operation`でコマンドの定義変更をDiscord APIに反映する。
3. `src/commands/**.ts`を作成しコマンドの実行内容を書く。
4. `src/index.ts`にコマンドの分岐を書き込む。
5. `test/**.test.ts`に必要なテストを書き込む。
6. ビルドし、`npm start`で実行することで挙動を確認する。
