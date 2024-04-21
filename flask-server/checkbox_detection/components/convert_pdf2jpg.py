import os
from pdf2image import convert_from_path
import cv2
import numpy as np

def pdf_to_jpg(pdf_path, output_dir):
    """
    PDFファイルをJPG画像に変換し、指定されたディレクトリに保存します。

    Args:
        pdf_path (str): PDFファイルのパス。
        output_dir (str): 画像を保存するディレクトリのパス。

    Returns:
        list: 保存された画像のファイルパスのリスト。
    """
    # PDFを画像に変換
    images = convert_from_path(pdf_path)

    # 保存された画像のファイルパスを格納するリスト
    saved_images = []

    # 画像を保存
    for i, img in enumerate(images):
        # 画像のファイル名を生成
        img_path = os.path.join(output_dir, f'image_{i}.jpg')
        
        # PDFのページをOpenCV形式に変換して保存
        cv2.imwrite(img_path, cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR))
        
        # 保存された画像のファイルパスをリストに追加
        saved_images.append(img_path)
    
    print(f'PDFファイルが{len(images)}ページのJPG画像に変換され、{output_dir}フォルダに保存されました。')
    
    return saved_images
