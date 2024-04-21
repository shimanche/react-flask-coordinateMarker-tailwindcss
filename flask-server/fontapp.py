import cv2
import numpy as np
from PIL import ImageFont, ImageDraw, Image

# フォントの設定
font_path ='./niku.ttf'
font_size = 40
font = ImageFont.truetype(font_path, font_size)

# 表示する文字
message = 'OpenCV(オープンシーブイ)'

# 表示する色
b, g, r, a = 0, 255, 0, 50  # B(青)・G(緑)・R(赤)・A(透明度)
outline_color = (255, 0, 0)  # 縁取りの色 (黒)

# 背景画像を作成
img = np.full((200, 500, 3), (255, 255, 255), dtype=np.uint8)
# img = np.zeros((200, 500, 3), np.uint8)
img_pil = Image.fromarray(img)
draw = ImageDraw.Draw(img_pil)

# テキストサイズを取得
# text_width, text_height = draw.textsize(message, font=font)

textsize = 30
font = ImageFont.truetype(font_path, size=textsize)
# text_width = draw.textlength(message, font=font)
# text_height = textsize
x, y = 20, 20
x1, y1, x2, y2 = draw.textbbox((x,y), message, font)
text_width = x2- x1
text_height = y2- y1
print(text_width)
print(text_height)

# テキストを描画
position = (50, 100) # テキスト表示位置

# 縁取り付きのテキストを描画（影のような効果）
outline_thickness = 2  # 縁取りの太さ
for dx in range(-outline_thickness, outline_thickness + 1):
    for dy in range(-outline_thickness, outline_thickness + 1):
        draw.text((position[0] + dx, position[1] + dy), message, font=font, fill=outline_color)


# テキストを描画する前に影を描画
shadow_color = (0, 0, 0)
shadow_offset = (2, 2)
shadow_position = (position[0] + shadow_offset[0], position[1] + shadow_offset[1])
draw.text(shadow_position, message, font=font, fill=shadow_color)




# テキストを描画する前にグラデーションを適用したマスクを作成
mask = Image.new('L', (text_width, text_height))
gradient = np.linspace(0, 255, text_width)  # 水平方向のグラデーションを作成

position = (50, 100) # テキスト表示位置
draw.text(position, message, font=font, fill=(b, g, r, a))  # テキストを描画

img = np.array(img_pil) # PIL を配列に変換

# 表示
cv2.imshow("res", img)
cv2.imwrite("res.png", img)

cv2.waitKey(3000)
cv2.destroyAllWindows()








'''
OK以下は動作する
'''
'''
# 字幕に使うフォントの設定
font_path ='./niku.ttf'
 # フォントファイルのパスを指定してください
# フォントを設定
font = ImageFont.truetype(font_path, 40)  # フォントのサイズを指定（例: 40）
# 表示させる文字
message = 'OpenCV(オープンシーブイ)'
# 表示する色
start_color = (0, 255, 0)  # グラデーションの開始色 (緑)
end_color = (0, 0, 255)    # グラデーションの終了色 (青)

b,g,r,a = 0,255,0,0 #B(青)・G(緑)・R(赤)・A(透明度)


# フォントを指定
# font = cv2.FONT_HERSHEY_SIMPLEX  # 指定したフォントに設定

# 背景が黒になるように、すべての要素を0とし、200*500でRGB値3つを格納でき、
# 要素のデータ型は8bit(1byte)の符号なし整数とする配列(背景画像)を作る。
img = np.zeros((200,500,3),np.uint8)
img_pil = Image.fromarray(img) # 配列の各値を8bit(1byte)整数型(0～255)をPIL Imageに変換。

draw = ImageDraw.Draw(img_pil) # drawインスタンスを生成

draw = ImageDraw.Draw(img_pil) # drawインスタンスを生成

position = (50, 100) # テキスト表示位置
draw.text(position, message, font = font , fill = (b, g, r, a) ) # drawにテキストを記載 fill:色 BGRA (RGB)

img = np.array(img_pil) # PIL を配列に変換

## 表示
cv2.imshow("res", img)
cv2.imwrite("res.png", img)

cv2.waitKey(3000)
cv2.destroyAllWindows()
'''






'''
'''

font_scale = 1.0
font_color = (255, 255, 255)  # 白色
font_thickness = 2  # 境界線の太さ
font_shadow_color = (0, 0, 0)  # 影の色（黒）

# ベースの画像（黒い背景）を作成
img_height, img_width = 200, 400
img = np.zeros((img_height, img_width, 3), dtype=np.uint8)

# テロップの文字
text = "こんにちは、これは日本語テロップです。"

# テキストの位置を設定
text_position = (20, 100)

# 影を描画
shadow_position = (text_position[0] + 2, text_position[1] + 2)
cv2.putText(img, text, shadow_position, font, font_scale, font_shadow_color, font_thickness + 1, cv2.LINE_AA)

# テキストを描画
cv2.putText(img, text, text_position, font, font_scale, font_color, font_thickness, cv2.LINE_AA)

# 画像をPNG形式で保存
output_filename = './static/output.png'
cv2.imwrite(output_filename, img)

print(f"Image saved as {output_filename}")
# # 画像のサイズを設定（幅と高さ）
# width, height = 640, 480

# # 黒い背景の画像を作成
# image = np.zeros((height, width, 3), dtype=np.uint8)

# # テキストを設定
# text = "hello"
# font_path = "./static/NotoSansJP-VariableFont_wght.ttf"  # 日本語フォントのパスを指定
# font_size = 1  # フォントサイズ
# font_color = (255, 255, 255)  # テキストの色（白）
# stroke_color = (0, 0, 0)  # 縁取りの色（黒）
# stroke_size = 2  # 縁取りの太さ

# # テキストの位置を設定
# x, y = 100, 200

# # フォントを設定
# font = cv2.FONT_HERSHEY_SIMPLEX

# # テキストに縁取りを追加して描画
# cv2.putText(image, text, (x, y), font, font_size, stroke_color, stroke_size, cv2.LINE_AA)
# cv2.putText(image, text, (x, y), font, font_size, font_color, 1, cv2.LINE_AA)

# # 画像を表示
# cv2.imshow("Japanese Text with Outline", image)
# cv2.waitKey(3000)
# cv2.destroyAllWindows()
