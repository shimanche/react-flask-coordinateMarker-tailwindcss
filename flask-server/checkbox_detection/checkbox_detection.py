import cv2

import cv2

def find_checkboxes(image_path):
    # 画像の読み込み
    image = cv2.imread(image_path)
    if image is None:
        print("画像の読み込みに失敗しました")
        return None
    
    # グレースケール変換
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Otsuの二値化
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    cv2.imshow('thresh before', thresh)
    
    # 輪郭の検出とノイズ除去
    cnts, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    AREA_THRESHOLD = 10
    for c in cnts:
        area = cv2.contourArea(c)
        if area < AREA_THRESHOLD:
            cv2.drawContours(thresh, [c], -1, 0, -1)
    
    # チェックボックスの修復
    repair_kernel1 = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 1))
    repair = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, repair_kernel1, iterations=1)
    repair_kernel2 = cv2.getStructuringElement(cv2.MORPH_RECT, (1, 5))
    repair = cv2.morphologyEx(repair, cv2.MORPH_CLOSE, repair_kernel2, iterations=1)
    
    # 修復後の画像から輪郭を再度検出
    cnts, _ = cv2.findContours(repair, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # チェックボックスの検出と描画
    checkbox_top_left_corners = []
    for c in cnts:
        peri = cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, 0.05 * peri, True)
        x, y, w, h = cv2.boundingRect(approx)
        aspect_ratio = w / float(h)
        if 0.9 < aspect_ratio < 1.1:
            cv2.rectangle(image, (x, y), (x + w, y + h), (36, 255, 12), 3)
            checkbox_top_left_corners.append((x, y))
    
    # 結果の表示
    cv2.imshow('thresh', thresh)
    cv2.imshow('repair', repair)
    cv2.imshow('original', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    
    return checkbox_top_left_corners

# 使用例
image_path = '../static/image_0.jpg' # 検出したい画像のパスを指定してください
checkbox_corners = find_checkboxes(image_path)

# 検出されたチェックボックスの左上の角の座標を表示
print('検出されたチェックボックスの左上の角:', checkbox_corners)




# def find_checkboxes(image_path):
#     # 画像の読み込み
#     image = cv2.imread(image_path)
    
#     print(f"画像のサイズ: {image.shape}")
    
#     # グレースケール変換
#     gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
#     # 二値化（閾値を設定して黒または白に変換）
#     _, binary = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)
    
#         # 二値化された画像を表示して確認
#     # cv2.imshow("Binary Image", binary)
#     # cv2.waitKey(0)
#     # cv2.destroyAllWindows()
    
#     # 輪郭の検出
#     contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
#     print(f"検出された輪郭の数: {len(contours)}")
#     # チェックボックスの左上の角の座標リスト
#     checkbox_top_left_corners = []
    
#     # 全ての輪郭を描画
#     cv2.drawContours(image, contours, -1, (0, 0, 255), 2)
    
#     # 各輪郭をループ
#     for contour in contours:
#         # 輪郭の周囲を計算
#         area = cv2.contourArea(contour)
        
#         # 小さすぎるまたは大きすぎる輪郭をフィルタリング
#         if 0000.1 < area < 20:  # サイズの調整は画像に依存します
#             # 輪郭の外接矩形を取得
#             x, y, w, h = cv2.boundingRect(contour)
            
#             # 左上の角の座標をリストに追加
#             checkbox_top_left_corners.append((x, y))
            
#             # 検出したチェックボックスの周囲に四角形を描画（オプション）
#             cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
    
#     # 検出したチェックボックスの画像を表示（オプション）
#     cv2.imshow('Detected Checkboxes', image)
#     cv2.waitKey(0)
#     cv2.destroyAllWindows()
    
#     return checkbox_top_left_corners

# # 例：画像のパスを指定して関数を呼び出します
# image_path = '../static/image_0.jpg'  # 画像のパスを指定してください
# checkbox_top_left_corners = find_checkboxes(image_path)

# # 検出されたチェックボックスの左上の角の座標を表示
# print('Checkboxes top-left corners:', checkbox_top_left_corners)
