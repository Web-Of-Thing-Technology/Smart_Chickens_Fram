import numpy as np
import cv2 as cv
import tensorflow.compat.v1 as tf
import imutils
model_path = "/root/Documents/Python_Chicken_Detect_Project/PB_Files/frozen_inference_graph.pb"
pbtxt_path = "/root/Documents/Python_Chicken_Detect_Project/TF_Record/object_detection.pbtxt"
testimg = "/root/Documents/Python_Chicken_Detect_Project/Chicken_Image_Raw_Data/Both/B001.jpg"

tf.disable_v2_behavior()

# Read the graph.
with tf.gfile.FastGFile(model_path, 'rb') as f:
    graph_def = tf.GraphDef()
    graph_def.ParseFromString(f.read())

with tf.Session() as sess:
    # Restore session
    sess.graph.as_default()
    tf.import_graph_def(graph_def, name='')

    # Read and preprocess an image.
    img = cv.imread(testimg)
    rows = img.shape[0]
    cols = img.shape[1]
    inp = cv.resize(img, (450, 450))
    inp = inp[:, :, [2, 1, 0]]  # BGR2RGB

    # Run the model
    out = sess.run([sess.graph.get_tensor_by_name('num_detections:0'),
                    sess.graph.get_tensor_by_name('detection_scores:0'),
                    sess.graph.get_tensor_by_name('detection_boxes:0'),
                    sess.graph.get_tensor_by_name('detection_classes:0')],
                   feed_dict={'image_tensor:0': inp.reshape(1, inp.shape[0], inp.shape[1], 3)})

    # Visualize detected bounding boxes.
    num_detections = int(out[0][0])
    for i in range(num_detections):
        classId = int(out[3][0][i])
        score = float(out[1][0][i])
        bbox = [float(v) for v in out[2][0][i]]

        if score > 0.5:
            x = bbox[1] * cols
            y = bbox[0] * rows
            right = bbox[3] * cols
            bottom = bbox[2] * rows
            cv.rectangle(img, (int(x), int(y)), (int(right), int(bottom)), (125, 255, 51), thickness=2)
            print(classId, "-->", score, x, y)

cv.imshow('SHOW', imutils.resize(img, width=800))
cv.waitKey()
