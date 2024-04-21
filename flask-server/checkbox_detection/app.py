from components.convert_pdf2jpg import pdf_to_jpg 


# PDFファイルのパス
pdf_file = '../static/checksheet.pdf'

# 画像を保存するディレクトリ
output_directory = '../static'

# PDFファイルをJPGに変換して保存
saved_images = pdf_to_jpg(pdf_file, output_directory)

# PDFファイルをJPGに変換して保存
saved_images = pdf_to_jpg(pdf_file, output_directory)

# 変換された画像ファイルのリストが返される
print(saved_images)











# from components.pri import pri

# pri("test")






# import cv2  # OpenCV for Python

# # 画像ファイルのパスを指定
# image_path = '../static/image.jpg'

# # 画像を読み込む
# image = cv2.imread(image_path)

# # 画像が正常に読み込まれたか確認
# if image is None:
#     print(f"Error: Unable to read image from {image_path}")
# else:
#     # 画像をグレースケールに変換
#     gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

#     # 画像をウィンドウに表示
#     cv2.imshow('Original Image', image)
#     cv2.imshow('Grayscale Image', gray_image)

#     # 任意のキー入力を待機
#     cv2.waitKey(0)

#     # ウィンドウを閉じる
#     cv2.destroyAllWindows()





# from convert_pdf2jpg import pdf_to_jpg


# # PDFファイルのパス
# pdf_file = 'path_to_pdf_file.pdf'

# # 画像を保存するディレクトリ
# output_directory = 'static'

# # PDFファイルをJPGに変換して保存
# saved_images = pdf_to_jpg(pdf_file, output_directory)



# # PDFファイルをJPGに変換して保存
# saved_images = pdf_to_jpg(pdf_file, output_directory)

# # 変換された画像ファイルのリストが返される
# print("saved_images")
