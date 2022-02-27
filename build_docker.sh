        echo "docker build command"
        docker build -t expense_ui_app  .
        echo "Pushing image to ECR..."
        docker tag expense_ui_app:latest 204215401117.dkr.ecr.ap-south-1.amazonaws.com/expense_ui_app:latest
        docker push 204215401117.dkr.ecr.ap-south-1.amazonaws.com/expense_ui_app:latest