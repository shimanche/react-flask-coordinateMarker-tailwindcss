import cv2

def draw(image_path, cor):
        # 画像の読み込み
    image = cv2.imread(image_path)
    if image is None:
        print("画像の読み込みに失敗しました")
        return None
    
    for point in cor:
        cv2.circle(image, point, radius=5, color=(0,255,0),thickness=-1 )
        
    # 画像を表示する
    cv2.imshow('Image with markers', image)
    cv2.waitKey(3000)
    cv2.destroyAllWindows()

if __name__ == "__main__":
    # 画像のパスを指定
    image_path = '../static/image_1.jpg'  # 検出したい画像のパスを指定してください
    
    # 座標リスト
    xinit = [100, 200, 300, 400]
    yinit = [100, 150, 250, 300, 400, 450]
    
    # 座標の組み合わせを作成
    cor = [(x, y) for x in xinit for y in yinit]
    
    # 画像にマーカーを描画
    draw(image_path, cor)



# # 検出されたチェックボックスの左上の角の座標を表示
# print('検出されたチェックボックスの左上の角:', checkbox_corners)




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
