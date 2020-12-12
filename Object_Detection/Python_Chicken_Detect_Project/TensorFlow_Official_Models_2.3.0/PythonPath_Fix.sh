PWD=/root/Documents/TensorFlow_Official_Models_2.1.0/
cd $PWD
cd research
protoc object_detection/protos/*.proto --python_out=.
cd ..
export PYTHONPATH=$PYTHONPATH:$PWD:$PWD/research:$PWD/research/slim
