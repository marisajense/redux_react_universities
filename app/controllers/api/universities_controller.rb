class Api::UniversitiesController < ApplicationController
  before_action :set_api_university, only: [:show, :edit, :update, :destroy]

  # GET /api/universities
  # GET /api/universities.json
  def index
    @api_universities = University.all
  end

  # GET /api/universities/1
  # GET /api/universities/1.json
  def show
  end

  # GET /api/universities/new
  def new
    @api_university = University.new
  end

  # GET /api/universities/1/edit
  def edit
  end

  # POST /api/universities
  # POST /api/universities.json
  def create
    @api_university = University.new(api_university_params)

    respond_to do |format|
      if @api_university.save
        format.html { redirect_to @api_university, notice: 'University was successfully created.' }
        format.json { render :show, status: :created }
      else
        format.html { render :new }
        format.json { render json: @api_university.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/universities/1
  # PATCH/PUT /api/universities/1.json
  def update
    respond_to do |format|
      if @api_university.update(api_university_params)
        format.html { redirect_to @api_university, notice: 'University was successfully updated.' }
        format.json { render :show, status: :ok }
      else
        format.html { render :edit }
        format.json { render json: @api_university.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/universities/1
  # DELETE /api/universities/1.json
  def destroy
    @api_university.destroy
    respond_to do |format|
      format.html { redirect_to api_universities_url, notice: 'University was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_university
      @api_university = University.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_university_params
      params.require(:university).permit(:name, :private, :year_built, :accredited, :number_students)
    end
end
