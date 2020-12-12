PWD=/content/Python_Chicken_Detect_Project/TensorFlow_Official_Models_2.3.0
cd $PWD
cd research
python3 setup.py build
python3 setup.py install
protoc object_detection/protos/*.proto --python_out=.
cd ..
export PYTHONPATH=$PYTHONPATH:$PWD:$PWD/research:$PWD/research/slim
cd research
python3 train.py --logtostderr --train_dir=/content/Python_Chicken_Detect_Project/Training --pipeline_config_path=/content/Python_Chicken_Detect_Project/CenterNet_ResNet101_V1_FPN_512x512/pipeline.config